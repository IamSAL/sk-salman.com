import NiceModal from "@ebay/nice-modal-react"
import { WidgetsBarDrawer } from "app/apps/WidgetsEditor/WidgetsSlotBar"
import { CONSTANTS } from "app/helpers/constants"
NiceModal.register(CONSTANTS.MODALS.WIDGETS_BAR, WidgetsBarDrawer)
