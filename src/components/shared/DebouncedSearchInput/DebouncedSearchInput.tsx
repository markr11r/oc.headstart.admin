import { CloseIcon } from "@chakra-ui/icons"
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import useDebounce from "hooks/useDebounce"
import { FC, useCallback, useEffect, useState } from "react"

interface IDebouncedSearchInputProps {
  value: string
  label: string
  placeholder?: string
  debounce?: number
  onSearch: (value: string) => void
}

const DebouncedSearchInput: FC<IDebouncedSearchInputProps> = ({
  label,
  placeholder,
  value,
  onSearch,
  debounce = 300
}) => {
  const [searchTerm, setSearchTerm] = useState(value)
  const debouncedSearchTerm = useDebounce(searchTerm, debounce)

  useEffect(() => {
    setSearchTerm(value)
  }, [value])

  useEffect(() => {
    if (debouncedSearchTerm !== value) {
      onSearch(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm, onSearch, value])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  return (
    <InputGroup colorScheme="brand" maxW={{ xl: "sm" }} size="sm" >
      <Input
        aria-label={label}
        placeholder={`${placeholder || label}...`}
        value={searchTerm}
        onChange={handleInputChange}
      ></Input>
      {searchTerm && (
        <InputRightElement>
          <IconButton size="xs" aria-label="Clear search" h="1.75rem" onClick={() => setSearchTerm("")}>
            <CloseIcon />
          </IconButton>
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default DebouncedSearchInput
