const StatusTag = ({ status, variant = "default" }) => {
  const getColor = () => {
    switch (status) {
      case "new":
        return "#10b981";
      case "updated":
        return "#f59e0b";
      case "inactive":
        return "#ef4444";
      case "imported":
        return "#3b82f6";
      default:
        return "#6b7280";
    }
  };

  return (
    <span
      className={`status-tag ${variant === "card" ? "card-badge" : ""}`}
      style={{
        backgroundColor: getColor(),
      }}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default StatusTag;