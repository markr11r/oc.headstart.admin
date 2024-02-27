import { Text, Container } from "@chakra-ui/react"
import React from "react"
import OrderList from "@/components/orders/list/OrderList"
import ProtectedContent from "components/auth/ProtectedContent"
import { appPermissions } from "config/app-permissions.config"

const ProtectedAnalyticsPage = () => (
    <ProtectedContent hasAccess={[appPermissions.DashboardViewer]}>
        <Container px={[4, 6, 8]} pt={[6, 8, 10]} bg={"st.mainBackgroundColor"} maxW="100%">
            <Text >Analytics</Text>
        </Container>
    </ProtectedContent>
)

export default ProtectedAnalyticsPage
