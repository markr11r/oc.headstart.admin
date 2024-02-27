import QuoteList from "@/components/quotes/list/QuoteList"
import { Text, Container } from "@chakra-ui/react"
import ProtectedContent from "components/auth/ProtectedContent"
import { appPermissions } from "config/app-permissions.config"

const ProtectedQuotesPage = () => (
    <ProtectedContent hasAccess={[appPermissions.OrderViewer, appPermissions.OrderManager]}>
        <QuoteList />
    </ProtectedContent>
)
export default ProtectedQuotesPage
