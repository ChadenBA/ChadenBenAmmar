import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  useTheme,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return alert("Complete the slider challenge!");
    console.log(formData);
    alert("Message sent! 🎉 (mock)");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsVerified(false);
  };

  return (
    <Box
      sx={{
        py: 16,
        px: { xs: 1, md: 12 },
        color: isDark ? "#f3f4f6" : "#111827",
      }}
    >
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 8,
        }}
      >
        {/* Contact Info */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Get in Touch
          </Typography>
          <Typography color={isDark ? "gray.400" : "gray.700"}>
            I am always open to discuss new projects, ideas, or opportunities. Reach me via email, phone, or follow me on social media.
          </Typography>

          <Stack spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon />
              <Link
                href="mailto:chedenbenammar@gmail.com"
                underline="hover"
                color="inherit"
              >
                chedenbenammar@gmail.com
              </Link>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon />
              <Link href="tel:+21699590388" underline="hover" color="inherit">
                +216 99590388
              </Link>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} mt={2}>
            <Link
              href="https://www.linkedin.com/in/chaden-ben-ammar/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                border: "1px solid",
                borderColor: isDark ? "#475569" : "#d1d5db",
                backgroundColor: isDark ? "#1e293b" : "#f9fafb",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: isDark ? "#2c3a50" : "#e5e7eb",
                },
              }}
            >
              <LinkedInIcon /> LinkedIn
            </Link>
            <Link
              href="https://github.com/ChadenBA"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                border: "1px solid",
                borderColor: isDark ? "#475569" : "#d1d5db",
                backgroundColor: isDark ? "#1e293b" : "#f9fafb",
                transition: "all 0.3s",
                "&:hover": {
                  backgroundColor: isDark ? "#2c3a50" : "#e5e7eb",
                },
              }}
            >
              <GitHubIcon /> GitHub
            </Link>
          </Stack>
        </Box>

        {/* Contact Form */}
        <Box sx={{ flex: 1 }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: isDark ? "#1E293B" : "#f9fafb",
                borderRadius: 2,
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: isDark ? "#1E293B" : "#f9fafb",
                borderRadius: 2,
              }}
            />
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: isDark ? "#1E293B" : "#f9fafb",
                borderRadius: 2,
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={5}
              variant="outlined"
              sx={{
                backgroundColor: isDark ? "#1E293B" : "#f9fafb",
                borderRadius: 2,
              }}
            />

            {/* Slider Verification */}
            <Box sx={{ mt: 2 }}>
              <Typography mb={1} color={isDark ? "gray.400" : "gray.700"}>
                Slide to Verify
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 50,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: isDark ? "#475569" : "#d1d5db",
                  backgroundColor: isDark ? "#1E293B" : "#f9fafb",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: isVerified ? "calc(100% - 50px)" : 0,
                    width: 50,
                    height: 50,
                    backgroundColor: "#4f46e5",
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "left 0.2s ease",
                  }}
                  draggable={!isVerified}
                  onDragEnd={() => setIsVerified(true)}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    color: isDark ? "#f3f4f6" : "#111827",
                    fontWeight: "bold",
                  }}
                >
                  {isVerified ? "Verified " : "Drag me"}
                </Typography>
              </Box>
            </Box>

            <Button
              type="submit"
              disabled={!isVerified}
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#4f46e5",
                "&:hover": { backgroundColor: "#4338ca" },
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
