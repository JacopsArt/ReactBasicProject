import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag variant="solid" color="black" {...props}>
      {children}
    </CTag>
  );
};
