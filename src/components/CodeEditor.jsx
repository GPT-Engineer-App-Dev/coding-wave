import React, { useState } from 'react';
import { Box, Button, VStack, HStack, Text } from '@chakra-ui/react';
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // This is a simple implementation. In a real-world scenario,
      // you'd want to use a secure method to evaluate code, possibly involving a backend.
      const result = eval(code);
      setOutput(String(result));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box height="400px" border="1px" borderColor="gray.200" borderRadius="md">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </Box>
      <HStack>
        <Button colorScheme="blue" onClick={runCode}>Run Code</Button>
      </HStack>
      <Box bg="gray.100" p={4} borderRadius="md">
        <Text fontWeight="bold">Output:</Text>
        <Text>{output}</Text>
      </Box>
    </VStack>
  );
};

export default CodeEditor;