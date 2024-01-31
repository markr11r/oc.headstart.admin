import { FlexProps, Flex } from "@chakra-ui/react"
import { Control } from "react-hook-form"
import { ProductDetailFormFields } from "../form-meta"
import { ShippingAndInventoryCard } from "./ShippingAndInventoryCard"

interface FulfillmentTabProps extends FlexProps {
  control: Control<ProductDetailFormFields>
  validationSchema: any
}
export function FulfillmentTab({ control, validationSchema, ...flexProps }: FulfillmentTabProps) {
  return (
    <Flex flexFlow="column" flexGrow="1" gap={6} flexWrap="wrap" {...flexProps}>
      <ShippingAndInventoryCard control={control} validationSchema={validationSchema} />
    </Flex>
  )
}
