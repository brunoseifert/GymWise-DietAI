import Header from "@/src/components/header";
import Select from "../../components/input/select";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  gender: z.string().min(1, { message: "o sexo é obrigatório" }),
  objective: z.string().min(1, { message: "o objetivo é obrigatório" }),
  level: z.string().min(1, { message: "o nivel é obrigatório" }),
});

type FormData = z.infer<typeof schema>;

export default function Create() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const genderOptions = [
    { label: "Masculino", value: "masculino" },
    { label: "Feminino", value: "feminino" },
  ];

  return (
    <View className="bg-secondaryBlack h-full">
      <Header step="Passo 2" title="Finalizando dieta" />
      <View className="px-4">
        <Text className="text-white text-xl mt-8 mb-4">Sexo:</Text>
        <Select
          name="gender"
          control={control}
          placeholder="Selecione o seu sexo..."
          error={errors.gender?.message}
          options={genderOptions}
        />
      </View>
    </View>
  );
}
