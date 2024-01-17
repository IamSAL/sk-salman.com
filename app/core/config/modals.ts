import NiceModal from "@ebay/nice-modal-react"
import { CONSTANTS } from "app/helpers/constants"
import { WidgetsBarDrawer } from "app/apps/WidgetsEditor/WidgetsSlotBar"
NiceModal.register(CONSTANTS.MODALS.WIDGETS_BAR, WidgetsBarDrawer)
