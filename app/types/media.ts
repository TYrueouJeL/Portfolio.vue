import type { Veille } from "./veille"

export interface Media {
    name: string
    veilles: Veille[]
}