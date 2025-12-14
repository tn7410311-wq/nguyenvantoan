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
        CHÀO MỪNG BẠN ĐẾN VỚI BẢNG KẾ HOẠCH CÔNG VIỆC HÀNG NGÀY
      </h1>

      {/*THỐNG KÊ*/}
      <div style={{display: "flex",gap: "full",marginBottom: "30px"}}>
        <StatBox title="Tổng công việc" value={totalTasks} bg="#3B82F6"  />
        <StatBox title="Đã hoàn thành" value={completedTasks} bg="#22C55E" />
        <StatBox title="Chưa hoàn thành" value={pendingTasks} bg="#F97316" />
      </div>

     {/* THÊM */}
    <div
      style={{
        position: "relative",
        marginBottom: "20px",
        maxWidth: "100%",
      }}
    >
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nhập công việc..."
        style={{
          width: "100%",
          padding: "12px 45px 12px 12px", // chừa chỗ cho nút
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          fontSize: "15px",
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
        style={{position: "absolute",right: "8px",top: "50%",transform: "translateY(-50%)",borderRadius:"50%",cursor: "pointer",backgroundColor: "#BFDBFE"}}>╋
      </button>
    </div>
      <div
        style={{display: "grid",gridTemplateColumns: "60px 1fr",gap: "10px"}}
      >
        <HeaderCell>✔</HeaderCell>
        <HeaderCell>CÔNG VIỆC CẦN HOÀN THÀNH TRONG NGÀY </HeaderCell>

        {tasks.map((task) => (
          <div key={task.id} style={{ display: "contents" }}>
            {/* Checkbox */}
            <div
              style={{padding: "10px",borderRadius: "6px",border: "1px solid #e5e7eb",textAlign: "center"}}>
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
            <div
              style={{padding: "10px",borderRadius: "6px",border: "1px solid #e5e7eb",display: "flex",alignItems: "center",justifyContent: "space-between",gap: "10px"}}>
              {/* TÊN */}
              <div style={{ flex: 1 }}>
                {editingId === task.id ? (
                  <input
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    style={{width: "50%",padding: "6px",borderRadius: "6px"}}/>
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
                    }}style={btn("#3B82F6")}>✔
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(task.id);
                      setEditingValue(task.title);
                    }}style={btn("#22C55E")}>Sửa
                  </button>
                )}

                <button
                  onClick={() =>
                    setTasks(tasks.filter((t) => t.id !== task.id))
                  }style={btn("#F97316")}>x
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/*style*/
const StatBox = ({ title, value, bg }) => (
  <div
    style={{padding: "10px",backgroundColor: bg,color: "black"}}>
    <h3 style={{ fontSize: "16px",textAlign: "center" }}>{title}</h3>
    <p style={{ fontSize: "46px" ,textAlign: "center"}}>{value}</p>
  </div>
);

const HeaderCell = ({ children }) => (
  <div
    style={{fontWeight: "600",textAlign: "center",padding: "5px",backgroundColor: "#f3f4f6"}}>
    {children}
  </div>
);
// style của btn
const btn = (bg) => ({padding: "6px 12px",backgroundColor: bg,color: "black",cursor: "pointer"});

export default DailyCompletedTasks;
