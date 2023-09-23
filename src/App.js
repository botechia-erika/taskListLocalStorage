import { FormLocal } from "./pages/FormLocal";
import { GlobalStyled } from "./theme/globalStyled";
import { ChakraProvider } from "@chakra-ui/react";
export default function App() {
  return (
    <ChakraProvider>
      <GlobalStyled />
      <FormLocal />
    </ChakraProvider>
  );
}
