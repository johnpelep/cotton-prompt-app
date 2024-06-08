import { CheckIcon, PlusCircleIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command"
import { cn } from "@/lib/utils"
import FilterOption from "@/types/filterOption"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"

export default function Filter({
  title,
  options,
  values,
  onSelect,
}: {
  title: string
  options: FilterOption[]
  values: string[]
  onSelect: (values: string[]) => void
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircleIcon className="mr-2 h-4 w-4 mt-[3px]" />
          {title}
          {values.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {values.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {values.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {values.length} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => values.includes(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = values.includes(option.value)

                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        onSelect(values.filter((v) => v !== option.value))
                      } else {
                        onSelect([...values, option.value])
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="mr-2">{option.label}</span>
                    <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                      {option.count}
                    </span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {values.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => onSelect([])}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
