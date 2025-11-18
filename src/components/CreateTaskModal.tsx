import { useEffect, useState } from "react";
import { CloseIcon, FlagIcon } from "../assets/icon/Icons";
import { taskStatus, users } from "../constants";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

function CreateTaskModal({
  titleModal = "",
  desModal = "",
  deadlineModal = "",
  assignedToModal = 1,
  statusIdModal = "",
  flagIdModal = 1,
  totalAttachmentsModal = 0,
  open,
  onClose,
  onSave,
}: any) {
  const [title, setTitle] = useState(titleModal);
  const [description, setDescription] = useState(desModal);
  const [deadline, setDeadline] = useState(deadlineModal);
  const [assignedTo, setAssignedTo] = useState(assignedToModal);
  const [statusId, setStatusId] = useState<number | "">(statusIdModal || "");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle(titleModal || "");
      setDescription(desModal || "");
      setDeadline(deadlineModal || "");
      setAssignedTo(assignedToModal || 1);
      setStatusId(statusIdModal || "");
      setShowError(false);
    }
  }, [
    open,
    titleModal,
    desModal,
    deadlineModal,
    assignedToModal,
    statusIdModal,
  ]);

  if (!open) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setShowError(true);
      return;
    }

    const newTask = {
      taskId: Date.now(),
      title: title,
      description: description,
      deadline: new Date(deadline),
      assignedTo: assignedTo,
      statusId: statusId,
      flagId: flagIdModal,
      totalAttachments: totalAttachmentsModal,
    };

    onSave(newTask);

    onClose();
  };

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      className="flex items-center justify-center"
    >
      <Box className="relative bg-white rounded-xl w-[634px] max-h-[538px] overflow-y-auto shadow-xl mx-auto p-6">
        <Box className="flex items-center justify-between mb-3">
          <Box className="inline-flex items-center justify-center w-8 h-8 border border-[#e9eaeb] rounded-[10px] gap-2.5">
            <FlagIcon color="#00FF00" />
          </Box>

          <Button
            onClick={onClose}
            sx={{
              minWidth: "30px",
              width: "30px",
              height: "30px",
              padding: 0,
              borderRadius: "50%",
              color: "rgb(156, 163, 175)",
              "&:hover": {
                backgroundColor: "#d5d5d5",
                color: "rgb(75, 85, 99)",
              },
              transition: "all 0.2s",
            }}
          >
            <CloseIcon />
          </Button>
        </Box>

        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "28px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          Save task
        </Typography>

        <Box component="form" className="space-y-4" onSubmit={handleSave}>
          <Box className="flex gap-4">
            <Box className="w-[407px]">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  mb: 0.5,
                  color: "#374151",
                }}
              >
                Title <span className="text-red-500">*</span>
              </Typography>
              <TextField
                fullWidth
                type="text"
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Type title of task"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "14px",
                  },
                }}
              />
              {showError && !title.trim() && (
                <Typography
                  sx={{ fontSize: "12px", color: "#ef4444", mt: 0.5 }}
                >
                  Title is required
                </Typography>
              )}
            </Box>

            <Box className="w-[163px]">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  mb: 0.5,
                  color: "#374151",
                }}
              >
                End Date
              </Typography>
              <TextField
                fullWidth
                type="date"
                size="small"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    fontSize: "14px",
                  },
                }}
              />
            </Box>
          </Box>

          <Box className="flex gap-4">
            <Box className="w-[407px]">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  mb: 0.5,
                  color: "#374151",
                }}
              >
                Description
              </Typography>
              <TextareaAutosize
                placeholder="Type description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                minRows={4}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  resize: "none",
                  outline: "none",
                }}
              />
            </Box>
            <Box className="w-[163px]">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  mb: 0.5,
                  color: "#374151",
                }}
              >
                Assign
              </Typography>

              <Select
                fullWidth
                value={assignedTo}
                size="small"
                onChange={(e) => setAssignedTo(Number(e.target.value))}
                sx={{
                  fontSize: "14px",
                }}
              >
                {users.map((user) => (
                  <MenuItem
                    value={user.userId}
                    key={user.userId}
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontWeight: 500,
                mb: 0.5,
                color: "#374151",
              }}
              className="text-[14px]"
            >
              Status
            </Typography>
            <Select
              fullWidth
              displayEmpty
              size="small"
              value={statusId}
              onChange={(e) => setStatusId(Number(e.target.value))}
              sx={{
                fontSize: "14px",
                color: statusId === "" ? "#9ca3af" : "#111827",
              }}
            >
              <MenuItem value="" disabled>
                Choose status
              </MenuItem>
              {taskStatus.map((status) => (
                <MenuItem
                  key={status.statusId}
                  value={status.statusId}
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {status.name}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={onClose}
              sx={{
                textTransform: "none",
                color: "#374151",
                borderColor: "#d1d5db",
                fontSize: "14px",
                fontWeight: 500,
                py: 1,
                "&:hover": {
                  borderColor: "#9ca3af",
                  backgroundColor: "#f9fafb",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                textTransform: "none",
                backgroundColor: "#9333ea",
                fontSize: "14px",
                fontWeight: 500,
                py: 1,
                "&:hover": {
                  backgroundColor: "#7e22ce",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default CreateTaskModal;
