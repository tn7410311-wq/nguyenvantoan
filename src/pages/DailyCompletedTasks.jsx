import { useState } from "react";

const DailyCompletedTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hoàn thành báo cáo", completed: true },
    { id: 2, title: "Họp team", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>
        Công việc hoàn thành trong ngày
      </h1>

      {/* ===== THỐNG KÊ ===== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <StatBox title="Tổng công việc" value={totalTasks} bg="#3b82f6" />
        <StatBox title="Đã hoàn thành" value={completedTasks} bg="#10b981" />
        <StatBox title="Chưa hoàn thành" value={pendingTasks} bg="#ef4444" />
      </div>

      {/* ===== THÊM ===== */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nhập công việc..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        />
        <button
          onClick={() => {
            if (!newTask.trim()) return;
            setTasks([
              ...tasks,
              { id: Date.now(), title: newTask, completed: false },
            ]);
            setNewTask("");
          }}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4f46e5",
            color: "white",
            cursor: "pointer",
          }}
        >
          Thêm
        </button>
      </div>

      {/* ===== BẢNG (2 CỘT) ===== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 1fr",
          gap: "10px",
        }}
      >
        <HeaderCell>✔</HeaderCell>
        <HeaderCell>Tên công việc</HeaderCell>

        {tasks.map((task) => (
          <div key={task.id} style={{ display: "contents" }}>
            {/* Checkbox */}
            <div
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id
                        ? { ...t, completed: !t.completed }
                        : t
                    )
                  )
                }
              />
            </div>

            {/* Tên + Hành động */}
            <div
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              {/* TÊN */}
              <div style={{ flex: 1 }}>
                {editingId === task.id ? (
                  <input
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "6px",
                      borderRadius: "6px",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      textDecoration: task.completed
                        ? "line-through"
                        : "none",
                      color: task.completed ? "#9ca3af" : "#111827",
                    }}
                  >
                    {task.title}
                  </span>
                )}
              </div>

              {/* BUTTON */}
              <div style={{ display: "flex", gap: "6px" }}>
                {editingId === task.id ? (
                  <button
                    onClick={() => {
                      setTasks(
                        tasks.map((t) =>
                          t.id === task.id
                            ? { ...t, title: editingValue }
                            : t
                        )
                      );
                      setEditingId(null);
                    }}
                    style={btn("#10b981")}
                  >
                    Lưu
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(task.id);
                      setEditingValue(task.title);
                    }}
                    style={btn("#3b82f6")}
                  >
                    Sửa
                  </button>
                )}

                <button
                  onClick={() =>
                    setTasks(tasks.filter((t) => t.id !== task.id))
                  }
                  style={btn("#ef4444")}
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ===== COMPONENT PHỤ (GIỮ STYLE TRONG FILE) ===== */
const StatBox = ({ title, value, bg }) => (
  <div
    style={{
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: bg,
      color: "white",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    }}
  >
    <h3 style={{ fontSize: "16px", fontWeight: "500" }}>{title}</h3>
    <p style={{ fontSize: "36px", fontWeight: "700" }}>{value}</p>
  </div>
);

const HeaderCell = ({ children }) => (
  <div
    style={{
      fontWeight: "600",
      padding: "10px",
      backgroundColor: "#f3f4f6",
      borderRadius: "6px",
    }}
  >
    {children}
  </div>
);

const btn = (bg) => ({
  padding: "6px 12px",
  backgroundColor: bg,
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
});

export default DailyCompletedTasks;
