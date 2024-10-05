import Header from "@/src/components/header";
import Input from "@/src/components/input";
import { Text, View, ScrollView } from "react-native";

import Constants from "expo-constants";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().min(1, { message: "o nome é obrigatório" }),
  weight: z.string().min(1, { message: "o nome é obrigatório" }),
  age: z.string().min(1, { message: "o nome é obrigatório" }),
  height: z.string().min(1, { message: "o nome é obrigatório" }),
});

type FormData = z.infer<typeof schema>;

const statusBarHeight = Constants.statusBarHeight;

export default function Step() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <View className="bg-backgroundBlack h-full">
      <View style={{ marginTop: statusBarHeight + 8 }}>
        <Header step="Passo 1" title="Vamos começar" />
      </View>
      <ScrollView>
        <Text className="text-white text-xl">Nome:</Text>
        <Input
          name="name"
          control={control}
          placeholder="Digite o nome"
          error={errors.name?.message}
          keyboardType="default"
        />
      </ScrollView>
    </View>
  );
}
