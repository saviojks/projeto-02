import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./style";

export function Home() {
    return (
        <HomeContainer>
            <form >
                <FormContainer>

                    <label>Vou trabalhar em :</label>
                    <input id='task' />

                    <label htmlFor="minutesAmount" >durante</label>
                    <input type="number" id="minutesAmount" />

                    <span>minutos</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>

                </CountdownContainer>
                <button type="submit" >
                    <Play />
                    Começar
                </button>
            </form>
        </HomeContainer>
    )
}