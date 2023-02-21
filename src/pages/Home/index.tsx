import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./style";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from "react";

interface ICycle {
    id: string;
    task: string;
    minutesAmount: number;
}

const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa!'),
    minutesAmount: zod.number().min(5, 'O ciclo precisa ser de no mínimo 5 minutos').max(60, 'O ciclo precisa ser de no máximo 6 minutos')
})

type NewCycleFormData = zod.infer<typeof newCycleValidationSchema>

export function Home() {
    const [cycles, setCycles] = useState<ICycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })

    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = new Date().getTime().toString()
        const newCycles: ICycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount
        }
        setCycles((state) => [...state, newCycles])
        setActiveCycleId(id)
        reset()
    }

    const ActiveCycle = cycles.find((cycle) => cycle.id === activeCycleId)
    console.log({ ActiveCycle });

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} >
                <FormContainer>
                    <label>Vou trabalhar em :</label>
                    <TaskInput
                        placeholder="Dê um nome para o seu projeto"
                        id='task'
                        list="task-suggestions"
                        {...register('task')}
                    />
                    <datalist id="task-suggestions" >
                        <option value="Projeto 1 " />
                        <option value="Projeto 2 " />
                        <option value="Projeto 3 " />
                        <option value="Pão de queijo" />
                    </datalist>
                    <label htmlFor="minutesAmount" >durante</label>
                    <MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={90}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />
                    <span>minutos</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                <StartCountdownButton disabled={isSubmitDisabled} type="submit" >
                    <Play />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}