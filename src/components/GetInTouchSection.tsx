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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) return alert("Complete the slider challenge!");
  
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent! 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsVerified(false);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };
  

  return (
    <Box
    sx={{
      py: { xs: 8, md: 16 },
      px: { xs: 2, sm: 4, md: 12 },
      color: isDark ? "#f3f4f6" : "#111827",
    }}
  >
    <Box
      sx={{
        maxWidth: 1000,
        mx: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // stack on mobile
        gap: { xs: 6, md: 8 },
      }}
    >
      {/* Contact Info */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
        >
          Get in Touch
        </Typography>
        <Typography
          color={isDark ? "gray.400" : "gray.700"}
          sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
        >
          I am always open to discuss new projects, ideas, or opportunities.
          Reach me via email, phone, or follow me on social media.
        </Typography>
  
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" />
            <Link
              href="mailto:chedenbenammar@gmail.com"
              underline="hover"
              color="inherit"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              chedenbenammar@gmail.com
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon fontSize="small" />
            <Link
              href="tel:+21699590388"
              underline="hover"
              color="inherit"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              +216 99590388
            </Link>
          </Stack>
        </Stack>
  
        <Stack
  direction="row"
  spacing={2}
  mt={2}
  flexWrap="wrap"
>
{[
  {
    href: "https://www.linkedin.com/in/chaden-ben-ammar/",
    icon: <LinkedInIcon fontSize="small" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ChadenBA",
    icon: <GitHubIcon fontSize="small" />,
    label: "GitHub",
  },
].map((btn, index) => (
  <Link
    key={index}
    href={btn.href}
    target="_blank"
    rel="noopener"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: { xs: 0.5, sm: 1 },          
      px: { xs: 1.5, sm: 3 },            
      py: { xs: 0.5, sm: 1.5 },          
      borderRadius: 2,
      border: "1px solid",
      borderColor: isDark ? "#475569" : "#d1d5db",
      backgroundColor: isDark ? "#1e293b" : "#f9fafb",
      transition: "all 0.3s",
      fontSize: { xs: "0.7rem", sm: "0.95rem" },  
      "&:hover": {
        backgroundColor: isDark ? "#2c3a50" : "#e5e7eb",
      },
      whiteSpace: "nowrap",              
    }}
  >
    {btn.icon}
    <Typography
      sx={{
        display: { xs: "none", sm: "inline" }, 
      }}
    >
      {btn.label}
    </Typography>
  </Link>
))}

</Stack>

      </Box>
  
      <Box sx={{ flex: 1, width: "100%" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {["name", "email", "subject"].map((field) => (
            <TextField
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                backgroundColor: isDark ? "#1E293B" : "#f9fafb",
                borderRadius: 2,
              }}
            />
          ))}
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
  
          <Box sx={{ mt: 2 }}>
            <Typography
              mb={1}
              color={isDark ? "gray.400" : "gray.700"}
              sx={{ fontSize: { xs: "0.8rem", md: "0.95rem" } }}
            >
              Slide to Verify
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 40, sm: 50 },
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
                  height: "100%",
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
                  fontSize: { xs: "0.75rem", md: "0.9rem" },
                }}
              >
                {isVerified ? "Verified" : "Drag me"}
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
              width: "100%", 
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: "0.85rem", md: "1rem" },
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
