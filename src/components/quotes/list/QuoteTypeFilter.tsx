import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, HStack, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Text, Tag } from "@chakra-ui/react"
import { FC } from "react"

interface IQuoteTypeFilter {
    value: string
    onChange: (newValue: any) => void
}

const QuoteTypeFilter: FC<IQuoteTypeFilter> = ({ value = "Quote", onChange }) => {
    return (
        <Menu>
            <MenuButton as={Button} py={0} variant="outline" minW="auto">
                <HStack alignContent="center" h="100%">
                    <Text>Quote type</Text>
                    <Tag colorScheme="default">{value || "Quote"}</Tag>
                    <ChevronDownIcon />
                </HStack>
            </MenuButton>
            <MenuList>
                <MenuOptionGroup defaultValue={value} title="Filter by type" type="radio" onChange={onChange}>
                    <MenuItemOption value="">Any</MenuItemOption>
                    <MenuItemOption value="Quote">Quote</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}

export default QuoteTypeFilter