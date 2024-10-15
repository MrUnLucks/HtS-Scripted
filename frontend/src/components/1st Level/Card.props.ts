export type CardProps = {
  name: string
  description?: string
  diceValue?: number
  type?: 'hero' | 'modifier'
  class?: 'paladin' | 'ranger'
  id: string
}
