import Event from "../../types/event"
import { Themed } from "../../types/themed"

export interface TopEventCarrouselProps extends Themed {
  events: Event[]
}