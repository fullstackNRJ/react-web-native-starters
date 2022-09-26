import React, { useMemo, useState } from "react";
import {
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  Platform,
} from "react-native";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

import { Colors } from "./Colors";
import Padding from "./Padding";
import { H5, H6, P } from "./Typography";

const INPUT_HEIGHT = 48;
const LABEL_HEIGHT = 20;
const CONTAINER_HEIGHT = INPUT_HEIGHT + 4 /* Padding */ + 2; /* Extra */
const ERROR_HINT_HEIGHT =
  16 /* Line Height */ + 2 /* Top Padding */ + 2; /* Bottom Padding */
const DEFAULT_COLORS = {
  color: Colors.dark,
  borderColor: Colors.grey,
  backgroundColor: Colors.white,
  textColor: Colors.dark,
};

export type InputModes = "disabled" | "focused" | "blurred" | "error";

export type InputProps = TextInputProps & {
  tip?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  errorHint?: string;
  required?: boolean;
  flex?: number;
  extraContent?: React.ReactNode;
};

const Input: React.FC<InputProps> = function ({
  tip,
  label,
  disabled = false,
  onFocus,
  onBlur,
  error,
  errorHint,
  required,
  extraContent,
  flex = undefined,
  value,
  ...props
}) {
  const [focus, setFocus] = useState(false);

  const height = useMemo(
    () =>
      CONTAINER_HEIGHT +
      (errorHint ? ERROR_HINT_HEIGHT : 0) +
      (label ? LABEL_HEIGHT : 0),
    [errorHint, label]
  );

  const { color, borderColor, backgroundColor, textColor } = useMemo(() => {
    const _c = { ...DEFAULT_COLORS };
    if (error) {
      _c.color = Colors.red;
      _c.borderColor = Colors.red;
      _c.textColor = Colors.red;
      return _c;
    }
    if (disabled) {
      _c.color = Colors.grey;
      _c.backgroundColor = Colors.transparentGrey;
      _c.textColor = Colors.darkGrey;
      return _c;
    }
    if (focus) {
      _c.borderColor = Colors.blue;
      _c.color = Colors.blue;
      return _c;
    }
    return _c;
  }, [focus, error, disabled]);

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    if (onFocus) onFocus(e);
  };
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    if (onBlur) onBlur(e);
  };

  return (
    <View
      style={{
        minHeight: height,
        height,
        maxHeight: height,
        flex: flex,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        {required && (
          <>
            <H6 color={Colors.red}>*</H6>
            <Padding width={2} />
          </>
        )}
        {label && (
          <H6 color={color} weight="600">
            {label}
          </H6>
        )}
        {/* tip && (
          <React.Fragment>
            <Padding width={12} />
            <ToolTip tip={tip} />
          </React.Fragment>
        ) */}
      </View>
      <Padding height={4} />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          value={value?.toString() || ""}
          placeholderTextColor={disabled ? Colors.grey : Colors.darkGrey}
          selectionColor={borderColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          style={[
            styles.input,
            {
              backgroundColor,
              borderColor,
              borderWidth: focus ? 1.5 : 1,
              color: textColor,
            },
            ,
          ]}
          {...props}
        />
        {Boolean(extraContent) && (
          <View style={styles.extraContent} children={extraContent} />
        )}
      </View>
      {Boolean(errorHint) && (
        <>
          <Padding width={2} />
          <P color={color}>{errorHint}</P>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: { flexDirection: "row", alignItems: "flex-end" },
  input: {
    height: 48,
    padding: 0,
    paddingHorizontal: 15,
    borderRadius: 6,
    flex: 1,
    minWidth: 20,
  },
  extraContent: {
    marginLeft: 8,
    justifyContent: "center",
  },
});

export default Input;
