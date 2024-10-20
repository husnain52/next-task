import {
  ArrowForward,
  BarChart,
  ExpandMore,
  Groups,
  Lock,
  RocketLaunch,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  blue,
  orange,
  teal,
  red,
} from "@mui/material/colors";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={{ md: 6, sm: 12 }}>
          <Box mt={4}>
            <Stack spacing={4}>
              <Typography variant="h3">FluentBoard SaaS</Typography>
              <Typography variant="body1">
                Unleash peak productivity with this system, your one-stop
                cloud-based project management platform. Streamline workflows,
                boost team collaboration, and stay ahead of deadlines. This
                system empowers you to effortlessly create tasks, assign them to
                team members, and track progress in real-time.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained">Get Started</Button>
                <Button variant="text">Contact Us</Button>
              </Stack>
            </Stack>
          </Box>
        </Grid2>
        <Grid2 size={{ md: 6, sm: 12 }}>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Image
              src={"/images/insert-block-animate.svg"}
              alt="sgv"
              height={500}
              width={500}
            />
          </Stack>
        </Grid2>
      </Grid2>

      <Box my={4}>
        <Grid2 container justifyContent="space-between">
          <Grid2 size={{ md: 8, sm: 12 }}>
            <Grid2 container spacing={8}>
              {[
                {
                  title: "Streamline Your Projects with Taskify",
                  description:
                    " Take control of your projects and boost team productivity with Taskify SaaS-Dev ,the all-in-oneproject management and task management solution. Ourcloud-based platform empowers you to effortlesslyorganize projects, collaborate with your team, and trackprogress – all in one place.",
                  icon: (
                    <RocketLaunch sx={{ fontSize: 30, color: blue[500] }} />
                  ),
                },
                {
                  title: "Collaborate Seamlessly with Taskify",
                  description:
                    "Empower your team to work together in real-time with Taskify's collaboration features. Share updates, assign tasks, and communicate effortlessly to ensure everyone stays on the same page.",
                  icon: <Groups sx={{ fontSize: 30, color: teal[500] }} />,
                },
                {
                  title: "Track Progress with Detailed Analytics",
                  description:
                    "Gain valuable insights into your team's productivity with Taskify's detailed analytics. Monitor project timelines, identify bottlenecks, and make data-driven decisions to keep your projects on track.",
                  icon: <BarChart sx={{ fontSize: 30, color: orange[300] }} />,
                },
                {
                  title: "Secure Data with Advanced Encryption",
                  description:
                    "Protect your project's sensitive information with Taskify's top-notch security features. Our platform ensures that your data is encrypted and accessible only to authorized users, keeping your projects safe and secure.",
                  icon: <Lock sx={{ fontSize: 30, color: red[400] }} />,
                },
              ].map((item) => (
                <Grid2 size={{ md: 10, lg: 6, sm: 12 }}>
                  <Box>
                    <Stack spacing={2}>
                      <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems="center"
                        // justifyContent="space-between"
                      >
                        <Paper
                          sx={{
                            height: 50,
                            width: 50,
                            alignContent: "center",
                            textAlign: "center",
                            borderRadius: "150px",
                          }}
                        >
                          {item.icon}
                        </Paper>{" "}
                        <Typography variant="h6" fontSize={17} fontWeight={900}>
                          {item.title}
                        </Typography>
                      </Stack>
                      <Typography variant="body2">
                        {item.description}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 3 }}>
            <Stack alignItems="center" sx={{ mt: { sm: 8, md: 0, xs: 8 } }}>
              <Card sx={{ maxWidth: 280 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/images/teamCollab.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Team Collaboration
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Enhance team productivity and communication with our
                    intuitive collaboration platform,facilitating seamless
                    coordination and information sharing.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    Learn More <ArrowForward fontSize="12px" sx={{ ml: 1 }} />
                  </Button>
                </CardActions>
              </Card>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>

      <Box mt={8}>
        <Grid2 container justifyContent="center">
          <Grid2 size={{ xs: 11, sm: 10, md: 6 }}>
            <Box textAlign={"center"}>
              <Typography variant="h5">Frequently Asked Questions</Typography>
              <Typography variant="body2">
                A lot of people dont appreciate the moment until its passed. I
                am not trying my hardest, and I am not trying to do
              </Typography>
            </Box>
            <Box mt={2}>
              {[
                {
                  q: "What makes this Task Management application stand out?",
                  a: "Built with the power of Next.js and Material UI, our Task Management application combines speed, scalability, and a sleek, modern design. It offers a seamless experience, helping teams to streamline their workflows, stay organized, and achieve more in less time.",
                },
                {
                  q: "How can this application improve my business operations?",
                  a: "By centralizing task assignment, tracking, and communication, our solution minimizes miscommunications and boosts productivity. It helps your team stay aligned on project goals, track deadlines effortlessly, and prioritize tasks to achieve faster turnaround times, leading to improved client satisfaction and business growth.",
                },
                {
                  q: "What features does this Task Management application offer?",
                  a: "Key features include task assignment and tracking, progress monitoring, team collaboration, automated reminders, customizable task statuses, and insightful analytics. Plus, with a highly intuitive user interface powered by Material UI, managing tasks has never looked so good!",
                },
                {
                  q: "Why did you choose Next.js and Material UI for this application?",
                  a: "Next.js ensures that the application is fast, SEO-friendly, and scalable, perfect for businesses of all sizes. Material UI provides a beautiful, responsive design that makes the application user-friendly and visually appealing. Together, they ensure a robust and delightful user experience.",
                },
                {
                  q: "How secure is this Task Management application?",
                  a: "Security is our priority. Using Next.js allows us to implement secure server-side rendering, and with proper authentication and authorization protocols, your data remains protected. Regular updates ensure the highest standards of security.",
                },
                {
                  q: "Can I customize the look and feel of the application?",
                  a: "Absolutely! With our custom theming options, you can personalize the appearance to match your brand. Whether you want to change colors, fonts, or layout styles, our Material UI integration makes it easy to create a look that suits your business.",
                },
                {
                  q: "Is the application suitable for remote teams?",
                  a: "Yes, it’s perfect for remote teams! Our application offers real-time updates and notifications, allowing team members to stay connected and in sync, no matter where they are. Assign tasks, track progress, and collaborate—all from a single, easy-to-use platform.",
                },
                {
                  q: "How does this application support growth as my business scales?",
                  a: "Scalability is built into the core of our solution with Next.js, enabling your business to handle an increasing number of tasks, projects, and team members without compromising performance. As your needs grow, the app grows with you, providing a consistent experience at every stage.",
                },
                {
                  q: "What kind of support do you provide for this Task Management application?",
                  a: "We offer comprehensive support, including onboarding assistance, regular updates, and customer service to help you get the most out of the application. We're committed to ensuring a smooth experience for you and your team.",
                },
                {
                  q: "How easy is it to get started with this Task Management application?",
                  a: "It’s as easy as signing up and adding your first tasks! Our intuitive interface ensures that even new users can get up and running quickly. Plus, with our support team available to guide you, you’ll be optimizing your workflow in no time.",
                },
              ].map(({ q, a }) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>{q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle2" color="gray">
                      {a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
