import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

interface OptionsProps {
  label: string;
  value: string | number;
}

interface SelectProps {
  name: string;
  control: any;
  placeholder?: string;
  error?: string;
  options: OptionsProps[];
}

export default function Select({
  name,
  control,
  placeholder,
  error,
  options,
}: SelectProps) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TouchableOpacity
              onBlur={onBlur}
              className="bg-grayOne flex flex-row justify-between border-[1px] border-grayTwo rounded-xl text-white placeholder:text-grayThree px-4 py-3"
            >
              <Text className="text-grayThree">{placeholder}</Text>
              <Feather name="arrow-down" size={14} color="#838896" />
            </TouchableOpacity>
          </>
        )}
      />
      {error && <Text className="text-Red">{error}</Text>}
    </View>
  );
}
