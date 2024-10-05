import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { Controller } from "react-hook-form";

interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardType: KeyboardTypeOptions;
}

export default function Input({
  name,
  control,
  placeholder,
  rules,
  error,
  keyboardType,
}: InputProps) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            className="bg-secondaryBlack border-[1px] border-grayOne rounded-xl text-white placeholder:text-grayThree px-4 py-2"
          />
        )}
      />
    </View>
  );
}
