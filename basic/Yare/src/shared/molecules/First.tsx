import React from "react";
import { View } from "react-native";
import { Colors } from "../ui/Colors";
import Input from "../ui/Input";

import { H2 } from "../ui/Typography";

const First = () => {
  return (
    <View>
      <H2 color={Colors.red}>First Shared Component</H2>

      <Input name="name" label="Some cool" />
    </View>
  );
};

export default First;
