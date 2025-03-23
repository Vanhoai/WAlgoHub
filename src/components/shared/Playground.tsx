"use client"

import * as React from "react"
import Editor from "@monaco-editor/react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { UpArrowSvg } from "./svgs"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const languages = ["cpp", "c", "javascript", "python", "golang", "rust"]

interface LanguageSelectorProps {
    languageSelected: string
    setLanguageSelected: React.Dispatch<React.SetStateAction<string>>
}

function LanguageSelector({ languageSelected, setLanguageSelected }: LanguageSelectorProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {languageSelected}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search languages ..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {languages.map((language) => (
                                <CommandItem
                                    key={language}
                                    value={language}
                                    onSelect={(currentValue) => {
                                        setLanguageSelected(currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {language}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            languageSelected === language ? "opacity-100" : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

const defaultCode =
    "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    cout.tie(nullptr);\n \n    return 0;\n}"

const options = {
    autoIndent: "full",
    contextmenu: true,
    fontFamily: "Monaco",
    fontSize: 14,
    lineHeight: 25,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    minimap: { enabled: true },
    scrollbar: {
        horizontalSliderSize: 4,
        verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
}

interface SelectThemeProps {
    selectedTheme: string
    setSelectedTheme: React.Dispatch<React.SetStateAction<"vs-light" | "vs-dark">>
}

function SelectTheme({ selectedTheme, setSelectedTheme }: SelectThemeProps) {
    return (
        <Select
            onValueChange={(value) => setSelectedTheme(value as "vs-light" | "vs-dark")}
            defaultValue={selectedTheme}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="vs-dark">vs-dark</SelectItem>
                    <SelectItem value="vs-light">vs-light</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export const Playground: React.FC = () => {
    const [theme, setTheme] = React.useState<"vs-light" | "vs-dark">("vs-light")
    const [language, setLanguage] = React.useState<string>("cpp")

    return (
        <div className="flex flex-col w-full my-10">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-5">
                    <span>Language</span>
                    <LanguageSelector languageSelected={language} setLanguageSelected={setLanguage} />
                    <Button variant="outline" className="flex flex-row items-center cursor-pointer">
                        Upload
                        <Image src={UpArrowSvg} alt="Upload" />
                    </Button>
                </div>

                <div className="flex flex-row items-center gap-5">
                    <span>Theme</span>
                    <SelectTheme selectedTheme={theme} setSelectedTheme={setTheme} />
                </div>
            </div>
            <div className="w-full h-[50vh] border p-4 mt-6">
                <Editor
                    defaultLanguage="cpp"
                    language={language}
                    defaultValue={defaultCode}
                    theme={theme}
                    options={options}
                />
            </div>
            <div className="flex flex-row justify-end mt-5 mb-32">
                <Button>Run</Button>
                <Button>Submit</Button>
            </div>
        </div>
    )
}
