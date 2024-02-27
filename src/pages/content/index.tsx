import { Container, Text } from '@chakra-ui/react'
import OrderList from "@/components/orders/list/OrderList"
import ProtectedContent from "components/auth/ProtectedContent"
import { appPermissions } from "config/app-permissions.config"

const ProtectedContentPage = () => (
    <Container px={[4, 6, 8]} pt={[6, 8, 10]} bg={"st.mainBackgroundColor"} maxW="100%">
        <Text >Content List Page</Text>
    </Container>
)

export default ProtectedContentPage
