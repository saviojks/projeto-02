import { ButtonContainer, ButtonVariant } from "./styles"

interface IButton {
    variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: IButton) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
} 