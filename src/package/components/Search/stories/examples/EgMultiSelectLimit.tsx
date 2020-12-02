import { useState } from "react";
import { Search } from "../../Search";
import { SearchOptionType, SearchValueType } from "../../types";

export function EgMultiSelectLimit() {
  const defaultEntry: SearchOptionType[] = [];
  const [selectedEntry, setSelectedEntry] = useState<SearchOptionType[]>(
    defaultEntry
  );

  return (
    <Search
      options={
        selectedEntry.length > 1
          ? []
          : [
              { value: "entry1", label: "First Entry" },
              { value: "entry2", label: "Second Entry" },
              { value: "entry3", label: "Third Entry" },
            ]
      }
      onChange={(
        selectedOption: SearchValueType<SearchOptionType, boolean>
      ) => {
        if (selectedOption) {
          setSelectedEntry(selectedOption as SearchOptionType[]);
        } else setSelectedEntry(defaultEntry);
      }}
      isMulti
      closeMenuOnSelect={false}
    />
  );
}
