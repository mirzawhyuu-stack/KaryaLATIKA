const STORAGE_TASKS = "smartlife_ai_tasks_v1";
const STORAGE_EXPENSES = "smartlife_ai_expenses_v1";
const STORAGE_THEME = "smartlife_ai_theme_v1";

let tasks = load(STORAGE_TASKS, []);
let expenses = load(STORAGE_EXPENSES, []);

const $ = (id) => document.getElementById(id);

function load(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        console.error("Gagal membaca data:", error);
        return fallback;
    }
}

function save() {
    localStorage.setItem(STORAGE_TASKS, JSON.stringify(tasks));
    localStorage.setItem(STORAGE_EXPENSES, JSON.stringify(expenses));
}

function formatRupiah(value) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(value);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}

function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function addTask() {
    const input = $("taskInput");
    const priority = $("priorityInput").value;
    const name = input.value.trim();

    if (!name) {
        showToast("Nama tugas belum diisi.");
        input.focus();
        return;
    }

    tasks.push({
        id: Date.now(),
        name,
        priority,
        done: false,
        createdAt: new Date().toLocaleDateString("id-ID")
    });

    input.value = "";
    save();
    render();
    showToast("Tugas berhasil ditambahkan.");
}

function toggleTask(id) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;

    task.done = !task.done;
    save();
    render();
    showToast(task.done ? "Tugas ditandai selesai." : "Tugas dikembalikan ke daftar.");
}

function deleteTask(id) {
    tasks = tasks.filter((item) => item.id !== id);
    save();
    render();
    showToast("Tugas dihapus.");
}

function addExpense() {
    const nameInput = $("expenseName");
    const amountInput = $("expenseAmount");
    const category = $("expenseCategory").value;
    const name = nameInput.value.trim();
    const amount = Number(amountInput.value);

    if (!name || !Number.isFinite(amount) || amount <= 0) {
        showToast("Isi keperluan dan jumlah dengan benar.");
        return;
    }

    expenses.push({
        id: Date.now(),
        name,
        amount,
        category,
        date: new Date().toLocaleDateString("id-ID")
    });

    nameInput.value = "";
    amountInput.value = "";
    save();
    render();
    showToast("Pengeluaran berhasil disimpan.");
}

function deleteExpense(id) {
    expenses = expenses.filter((item) => item.id !== id);
    save();
    render();
    showToast("Catatan pengeluaran dihapus.");
}

function priorityClass(priority) {
    if (priority === "Tinggi") return "high";
    if (priority === "Rendah") return "low";
    return "medium";
}

function renderTasks() {
    const list = $("taskList");
    $("taskPill").textContent = `${tasks.length} tugas`;

    if (tasks.length === 0) {
        list.innerHTML = `<div class="empty-state">Belum ada tugas. Tambahkan tugas pertamamu.</div>`;
        return;
    }

    list.innerHTML = tasks.map((task) => `
        <div class="item ${task.done ? "done" : ""}">
            <div class="item-main">
                <div class="item-name">${escapeHTML(task.name)}</div>
                <div class="item-meta">
                    <span class="tag ${priorityClass(task.priority)}">${escapeHTML(task.priority)}</span>
                    <span class="tag">${escapeHTML(task.createdAt)}</span>
                </div>
            </div>
            <div class="item-actions">
                <button title="${task.done ? "Belum selesai" : "Selesai"}"
                        onclick="toggleTask(${task.id})">${task.done ? "↶" : "✓"}</button>
                <button class="delete" title="Hapus" onclick="deleteTask(${task.id})">×</button>
            </div>
        </div>
    `).join("");
}

function renderExpenses() {
    const list = $("expenseList");
    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    $("expensePill").textContent = formatRupiah(total);

    if (expenses.length === 0) {
        list.innerHTML = `<div class="empty-state">Belum ada pengeluaran.</div>`;
        return;
    }

    list.innerHTML = [...expenses].reverse().map((item) => `
        <div class="item">
            <div class="item-main">
                <div class="item-name">${escapeHTML(item.name)}</div>
                <div class="item-meta">
                    <span class="tag">${escapeHTML(item.category)}</span>
                    <span class="tag">${escapeHTML(item.date)}</span>
                </div>
            </div>
            <div class="item-actions">
                <strong>${formatRupiah(item.amount)}</strong>
                <button class="delete" title="Hapus" onclick="deleteExpense(${item.id})">×</button>
            </div>
        </div>
    `).join("");
}

function generateRecommendation() {
    const unfinished = tasks.filter((task) => !task.done);
    const highPriority = unfinished.filter((task) => task.priority === "Tinggi");
    const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

    const messages = [];

    if (tasks.length === 0) {
        messages.push("Kamu belum memiliki tugas. Tambahkan satu tugas utama agar rencana harian lebih jelas.");
    } else if (unfinished.length === 0) {
        messages.push("Semua tugas selesai. Pertahankan ritme produktif dan gunakan waktu luang untuk beristirahat.");
    } else if (highPriority.length > 0) {
        messages.push(`Ada ${highPriority.length} tugas prioritas tinggi. Sebaiknya kerjakan tugas tersebut terlebih dahulu.`);
    } else if (unfinished.length >= 4) {
        messages.push(`Masih ada ${unfinished.length} tugas. Pecah pekerjaan menjadi langkah kecil agar lebih mudah diselesaikan.`);
    } else {
        messages.push(`Masih ada ${unfinished.length} tugas. Fokus pada satu tugas sebelum berpindah ke tugas berikutnya.`);
    }

    if (totalExpense > 300000) {
        messages.push("Total pengeluaran sudah cukup tinggi. Periksa kembali transaksi yang tidak terlalu penting.");
    } else if (totalExpense > 100000) {
        messages.push("Pengeluaran sudah mulai bertambah. Tetap catat transaksi agar lebih mudah mengontrol anggaran.");
    } else if (expenses.length > 0) {
        messages.push("Catatan keuangan sudah berjalan. Pertahankan kebiasaan mencatat setiap transaksi.");
    } else {
        messages.push("Belum ada pengeluaran tercatat. Mulai catat transaksi agar pola keuangan dapat dipantau.");
    }

    const recommendation = messages.join(" ");
    $("recommendation").textContent = recommendation;
    showToast("Analisis selesai.");
}

function updateStats() {
    const completed = tasks.filter((task) => task.done).length;
    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

    $("totalTasks").textContent = tasks.length;
    $("completedTasks").textContent = completed;
    $("totalExpenses").textContent = formatRupiah(total);
    $("progressPercent").textContent = `${percent}%`;
    $("heroProgress").textContent = `${percent}%`;
}

function render() {
    renderTasks();
    renderExpenses();
    updateStats();
}

function resetData() {
    const confirmed = confirm("Hapus semua tugas dan pengeluaran?");
    if (!confirmed) return;

    tasks = [];
    expenses = [];
    save();
    render();
    $("recommendation").textContent = "Data telah direset. Tambahkan aktivitas baru untuk memulai kembali.";
    showToast("Semua data berhasil direset.");
}

function applyTheme(theme) {
    document.body.classList.toggle("light", theme === "light");
    $("themeButton").textContent = theme === "light" ? "☀" : "☾";
}

function toggleTheme() {
    const current = localStorage.getItem(STORAGE_THEME) || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_THEME, next);
    applyTheme(next);
}

$("addTaskButton").addEventListener("click", addTask);
$("addExpenseButton").addEventListener("click", addExpense);
$("analyzeButton").addEventListener("click", generateRecommendation);
$("clearDataButton").addEventListener("click", resetData);
$("themeButton").addEventListener("click", toggleTheme);

$("taskInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
});

$("expenseAmount").addEventListener("keydown", (event) => {
    if (event.key === "Enter") addExpense();
});

$("menuButton").addEventListener("click", () => {
    $("navLinks").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => $("navLinks").classList.remove("open"));
});

const savedTheme = localStorage.getItem(STORAGE_THEME) || "dark";
applyTheme(savedTheme);
render();
