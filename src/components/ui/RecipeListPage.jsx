import { Tag as CTag } from "@chakra-ui/react"

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={2}
      // size="sm"
      variant="solid"
      color="black"
      {...props}
    >
      {children}
    </CTag>
  );
};