"use client";
import {
  createTheme,
  ThemeProvider,
  Box,
  Button,
  ButtonGroup,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Grid,
  Collapse,
  Grow,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AiOutlineMenu,
  AiFillHeart,
  AiFillHome,
  AiOutlineMessage,
} from "react-icons/ai";
import { GoDot } from "react-icons/go";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0078D4",
      dark: "#0063C6",
    },
    secondary: {
      main: "#F0F0F0",
      light: "#F5F5F5",
    },
    text: {
      secondary: "#202124",
      disabled: "#616161",
    },
  },
});

export default function Home() {
  const [open, setOpen] = useState(false);

  const [pages, setPages] = useState([
    // {
    //   name: "Trang chủ",
    //   url: "/",
    //   icon: "./Vector.svg",
    //   active: false,
    // },
    {
      name: "Trang chủ",
      url: "/",
      icon: "./Group 1310.svg",
      active: true,
    },
    {
      name: "Trò chuyện",
      url: "/1",
      icon: "/Group 1151.png",
      active: false,
    },
    {
      name: "Thông báo",
      url: "/2",
      icon: "/Group 1443.png",
      active: false,
    },
    {
      name: "Danh bạ",
      url: "/3",
      icon: "/Group 1146.png",
      active: false,
    },
    {
      name: "Thống kê",
      url: "/4",
      icon: "/Group 1448.png",
      active: false,
    },
    {
      name: "Báo cáo",
      url: "/5",
      icon: "./Group 27569.svg",
      active: false,
    },
    {
      name: "Quản trị",
      url: "/6",
      icon: "./Group 27570.svg",
      active: false,
    },
  ]);

  const functions = [
    {
      name: "Đăng ký hoạt động ngoại khóa",
      icon: "/Group 27734.png",
    },
    {
      name: "Quản lý hoạt động ngoại khóa",
      icon: "/Group 1200.png",
    },
    {
      name: "Dung lượng sử dụng",
      icon: "/Group 27654.png",
    },
    {
      name: "Gửi thông báo học sinh",
      icon: "/Group 1180.png",
    },
    {
      name: "Gửi thông báo giáo viên",
      icon: "/Group 1201.png",
    },
    {
      name: "Lịch sử thông báo",
      icon: "/Group 27740.png",
    },
    {
      name: "Điểm danh toàn trường",
      icon: "/Vector.png",
    },
    {
      name: "Hộp thư thông báo",
      icon: "/Group 1195.png",
    },
    {
      name: "Thống kê giáo dục",
      icon: "/Group 27741.png",
    },
    {
      name: "Thống kê điểm danh",
      icon: "/Vector.png",
    },
    {
      name: "Danh sách điểm danh",
      icon: "/Group 27372.png",
    },
    {
      name: "Quản lý cuộc họp",
      icon: "/Vector.png",
    },
    {
      name: "Quét mã QR Code",
      icon: "/Group 27739.png",
    },
    {
      name: "Trang tin điện tử",
      icon: "/Group 27737.png",
    },
  ];

  const news = [
    {
      title:
        "Đoàn học sinh Hà Nội đại diện Việt Nam đạt thành tích cao tại Kỳ thi Olympic quốc tế...",
      banner: "/Rectangle 947.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 45,
      comment: 150,
      readed: "Đã đọc",
    },
    {
      title: "Một sáng tạo hiệu quả của học sinh Thủ đô năm 2021",
      banner: "/Rectangle 2942.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 250,
      comment: 18,
      readed: "Đã đọc",
    },
    {
      title:
        "Học sinh Việt Nam giành 2 HCV tại Olympic quốc tế về Thiên văn và Vật lý thiên văn",
      banner: "/Rectangle 2951.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 169,
      comment: 285,
      readed: "Đã đọc",
    },
    {
      title:
        "Hà Nội điều chỉnh việc cho học sinh THPT trở lại trường từ ngày 6/12",
      banner: "/Rectangle 2952.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 180,
      comment: 38,
      readed: "Đã đọc",
    },
    {
      title: "Hệ thống toàn diện kiến thức Lí, Hóa, Sinh khối THCS",
      banner: "/Rectangle 2957.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 680,
      comment: 282,
      readed: "Đã đọc",
    },
  ];

  const media = [
    {
      title: "Phần mềm quản lý điểm học sinh thcs kết nối csdl ngành GD&ĐT",
      banner: "/Rectangle 2991.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 45,
      comment: 150,
      readed: "Đã đọc",
    },
    {
      title:
        "Vì sao ngày càng nhiều trường học đầu tư sử dụng phần mềm kết nối giáo dục?",
      banner: "/Rectangle 2993.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 250,
      comment: 18,
      readed: "Đã đọc",
    },
    {
      title:
        "Giải đáp các thắc mắc thường gặp khi cài đặt và sử dụng phần mềm kết nối giáo dục eNetViet",
      banner: "/Rectangle 2992.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 680,
      comment: 282,
      readed: "Đã đọc",
    },
    {
      title:
        "Kết nối chặt chẽ giữa gia đình và nhà trường: Chìa khóa giúp trẻ phát triển toàn diện",
      banner: "/Rectangle 2994.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 169,
      comment: 285,
      readed: "Đã đọc",
    },
    {
      title: "Cách tải, cài đặt và sử dụng phần mềm giả lập LDPlayer miễn phí",
      banner: "/Rectangle 2995.png",
      producer: "Hanoi_edu",
      expDate: "21/12/2021",
      like: 180,
      comment: 38,
      readed: "Đã đọc",
    },
  ];

  const path = usePathname();

  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"} alignContent={"stretch"} minWidth={"100vh"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bgcolor={theme.palette.primary.main}
          minHeight={"100vh"}
          sx={{ transition: "all 0.4s ease-in-out" }}
          width={open ? 150 : 80}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            <Button
              sx={{
                p: open ? 2.3 : 1.3,
                transition: "padding 0.4s ease",
                minHeight: 63,
              }}
            >
              <Image
                src={open ? "./Group 27571.svg" : "./Vector.svg"}
                alt="logo"
                width={open ? 111 : 36}
                height={open ? 28 : 36}
              />
            </Button>
            {pages.map((page, index) => (
              <Box
                display={"flex"}
                flexDirection={"column"}
                key={index}
                alignItems={"center"}
                justifyContent={"center"}
                color="#fff"
                height={open ? 100 : 80}
                sx={{
                  transition: "all 0.4s ease-in-out",
                  paddingTop: open ? 0 : 2,
                }}
                bgcolor={
                  path === page.url ? theme.palette.primary.dark : "inherit"
                }
              >
                <Image src={page.icon} alt={page.name} width={36} height={36} />
                <Typography
                  // display={open ? "block" : "none"}
                  sx={{
                    transition: "all 0.4s ease-in-out",
                    opacity: open ? 1 : 0,
                    whiteSpace: "nowrap",
                    marginTop: open ? 1 : 0,
                  }}
                >
                  {page.name}
                </Typography>
              </Box>
            ))}
          </ButtonGroup>
        </Box>
        <Box display={"flex"} flexDirection={"column"} width={"100%"}>
          <AppBar
            position="static"
            color="inherit"
            sx={{ boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: theme.palette.primary.main }}
                onClick={() => setOpen(!open)}
              >
                <AiOutlineMenu />
              </IconButton>
              <Typography
                variant="h6"
                fontSize={21}
                fontWeight={600}
                component="div"
                sx={{ flexGrow: 1, textTransform: "uppercase" }}
                color={theme.palette.primary.main}
              >
                TRường thpt thủ đô
              </Typography>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  textAlign={"right"}
                >
                  <Typography
                    fontSize={17}
                    fontWeight={500}
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Hà Trung Kiên
                  </Typography>
                  <Typography
                    fontSize={15}
                    fontWeight={400}
                    sx={{ color: theme.palette.text.disabled }}
                  >
                    Lãnh đạo nhà trường
                  </Typography>
                </Box>
                <Avatar src="Ellipse 1.png" alt="avatar" />
              </Box>
            </Toolbar>
          </AppBar>
          <Box ml={3} gap={1} alignItems={"center"} display={"flex"} my={2}>
            <AiFillHome color={theme.palette.primary.main} fontSize={24} />
            <Typography
              color={theme.palette.primary.main}
              alignItems={"center"}
            >
              Trang chủ
            </Typography>
          </Box>
          <Box bgcolor={theme.palette.secondary.light} pt={1}></Box>
          <Box display={"flex"} ml={3} gap={2} my={1}>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                borderRadius: 18,
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Lớp 10A1
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.secondary.main,
                color: theme.palette.text.disabled,
                borderRadius: 18,
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Lớp 10A2
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.secondary.main,
                color: theme.palette.text.disabled,
                borderRadius: 18,
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              Lớp 10A3
            </Button>
          </Box>
          <Typography
            py={2}
            ml={3}
            color={theme.palette.text.secondary}
            fontSize={19}
            fontWeight={600}
          >
            Các chức năng
          </Typography>
          <Box mx={6} maxWidth={"1800px"}>
            <Grid container spacing={2}>
              {functions.map((func, index) => (
                <Grid
                  key={index}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  item
                  xs={1.5}
                >
                  <Image
                    src={func.icon}
                    alt={func.name}
                    width={64}
                    height={64}
                  />
                  <Typography
                    color={theme.palette.text.secondary}
                    fontSize={15}
                    fontWeight={400}
                    textAlign={"center"}
                    my={2}
                  >
                    {func.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box bgcolor={theme.palette.secondary.light} pt={1}></Box>
          <Typography
            py={2}
            ml={3}
            color={theme.palette.text.secondary}
            fontSize={19}
            fontWeight={600}
          >
            Tin tức sự kiện
          </Typography>
          <Box
            display={"flex"}
            gap={4}
            alignItems={"stretch"}
            pb={5}
            mx={3}
            maxWidth={"1800px"}
          >
            {news.map((n, index) => (
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"start"}
                width={"20%"}
              >
                <Image
                  src={n.banner}
                  alt={n.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  my={1}
                >
                  <Typography
                    color={theme.palette.text.disabled}
                    fontSize={15}
                    fontWeight={400}
                  >
                    {n.producer}
                  </Typography>
                  <Typography
                    color={theme.palette.text.disabled}
                    fontSize={15}
                    fontWeight={400}
                  >
                    {n.expDate}
                  </Typography>
                </Box>
                <Typography
                  color={theme.palette.text.secondary}
                  fontSize={17}
                  fontWeight={400}
                >
                  {n.title}
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  flex={1}
                  alignItems={"flex-end"}
                  width={"100%"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <AiFillHeart color="red" />
                    {n.like}
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <AiOutlineMessage />
                    {n.comment}
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <GoDot />
                    {n.readed}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box bgcolor={theme.palette.secondary.light} pt={1}></Box>
          <Typography
            py={2}
            ml={3}
            color={theme.palette.text.secondary}
            fontSize={19}
            fontWeight={600}
          >
            Media Box
          </Typography>
          <Box
            display={"flex"}
            gap={4}
            mx={3}
            alignItems={"stretch"}
            pb={5}
            maxWidth={"1800px"}
          >
            {media.map((n, index) => (
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"start"}
                width={"20%"}
              >
                <Image
                  src={n.banner}
                  alt={n.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  my={1}
                >
                  <Typography
                    color={theme.palette.text.disabled}
                    fontSize={15}
                    fontWeight={400}
                  >
                    {n.producer}
                  </Typography>
                  <Typography
                    color={theme.palette.text.disabled}
                    fontSize={15}
                    fontWeight={400}
                  >
                    {n.expDate}
                  </Typography>
                </Box>
                <Typography
                  color={theme.palette.text.secondary}
                  fontSize={17}
                  fontWeight={400}
                >
                  {n.title}
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  flex={1}
                  alignItems={"flex-end"}
                  width={"100%"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <AiFillHeart color="red" />
                    {n.like}
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <AiOutlineMessage />
                    {n.comment}
                  </Box>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <GoDot />
                    {n.readed}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
