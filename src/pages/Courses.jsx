import React, { useState } from 'react';
import { Box, Heading, SimpleGrid, Button, Text, useToast } from '@chakra-ui/react';
import CodeEditor from '../components/CodeEditor';

// Mock data for courses
const coursesData = [
  { id: 1, title: 'Introduction to React', description: 'Learn the basics of React' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript concepts' },
  { id: 3, title: 'Web Design Fundamentals', description: 'Master the principles of web design' },
];

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const toast = useToast();

  const handleEnroll = (courseId) => {
    if (enrolledCourses.includes(courseId)) {
      toast({
        title: 'Already enrolled',
        description: "You're already enrolled in this course.",
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
      toast({
        title: 'Enrollment successful',
        description: "You've been enrolled in the course.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Available Courses</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {coursesData.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">{course.title}</Heading>
            <Text mt={4}>{course.description}</Text>
            <Button
              mt={4}
              colorScheme={enrolledCourses.includes(course.id) ? "green" : "blue"}
              onClick={() => handleEnroll(course.id)}
            >
              {enrolledCourses.includes(course.id) ? "Enrolled" : "Enroll"}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      <Button mt={4} onClick={() => setShowCodeEditor(!showCodeEditor)}>
        {showCodeEditor ? 'Hide Code Editor' : 'Show Code Editor'}
      </Button>
      {showCodeEditor && (
        <Box mt={8}>
          <Heading size="md" mb={4}>Code Editor</Heading>
          <CodeEditor />
        </Box>
      )}
    </Box>
  );
};

export default Courses;