import { Square } from "../components/Square"

export const tableConfig = [
    {
        label: 'Fruit',
        render:(fruit) => fruit.name,
        sortValue:(fruit) => fruit.name
    },
    {
        label: 'Color',
        render:(fruit) => <Square color={fruit.color}/>
    },
    {
        label: 'Score',
        render:(fruit) => fruit.score,
        sortValue:(fruit) => fruit.score
    },
  ]