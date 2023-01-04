import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();
  const showToast = (title, description, status) => {
    toast({
      title,
      description: description || "",
      status,
      duration: 3000,
      isClosable: true,
    });
  };
  return { showToast };
};
