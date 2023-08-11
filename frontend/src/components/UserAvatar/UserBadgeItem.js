import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction, tagName }) => {
  return (
    <Box
      display="flex"
      gap="8px"
      alignItems="center"
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="rgb(30, 139, 195)"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      {tagName && (
        <Box bg="lightgreen" width="fit-content" p="2px 4px" borderRadius="6px">
          {tagName}
        </Box>
      )}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
