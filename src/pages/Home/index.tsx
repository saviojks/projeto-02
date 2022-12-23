import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <form >
                <FormContainer>

                    <label>Vou trabalhar em :</label>
                    <TaskInput placeholder="Dê um nome para o seu projeto" id='task' />

                    <label htmlFor="minutesAmount" >durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" />

                    <span>minutos</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CountdownContainer>
                <StartCountdownButton disabled type="submit" >
                    <Play />
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}