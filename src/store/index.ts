import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { AccountEntity, AccountEntityOrNull } from "@/core"

interface AccountsState {
    account: AccountEntityOrNull
    updateAccount: (account: AccountEntity | null) => void
}

export const useAccountStore = create<AccountsState>()(
    devtools(
        persist(
            (set) => ({
                account: null,
                updateAccount: (account: AccountEntityOrNull) => set({ account }),
            }),
            {
                name: "accounts-store",
            },
        ),
    ),
)
