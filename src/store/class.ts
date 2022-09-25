import { acceptHMRUpdate, defineStore } from 'pinia'
import classApi from '~/api/modules/class'

export interface Items {
  id: number | string
  name: string
}

interface Mentors extends Items {
  description: string
}

interface Detail extends Items {
  mentors: Array<Mentors>
  description: string
}

export const useClassStore = defineStore('classes', {
  state: () => ({
    classes: [] as Items[],
    detailClasses: {} as Detail,
    loading: false,
    message: {},
    isSuccess: false,
    isShownToast: false,
  }),
  getters: {
    getClasses(): Items[] {
      return this.classes
    },
    getDetailClass(): Detail {
      return this.detailClasses
    },
    isFetching(): boolean {
      return this.loading
    },
    getMessage(): any {
      return this.message
    },
    getToast(): boolean {
      return this.isShownToast
    },
    getIsSuccess(): boolean {
      return this.isSuccess
    },
  },
  actions: {
    async getAvailableClass() {
      this.loading = true
      try {
        const res = await classApi.getAvailableClasses()
        this.classes = res.data.items
        this.loading = false
      }
      catch (err) {
        this.loading = false
        console.error(err)
        throw err
      }
    },
    async fetchDetail(id: number) {
      this.loading = true
      try {
        const res = await classApi.getDetailClass({ id })
        this.detailClasses = res.data
        this.loading = false
      }
      catch (err) {
        this.loading = false
        console.error(err)
        throw err
      }
    },
    showToast() {
      this.isShownToast = true
      setTimeout(() => {
        this.isShownToast = false
      }, 5000)
    },
    handleSuccessRequest(msg: string) {
      this.loading = false
      this.isSuccess = true
      this.message = msg
      this.showToast()
    },
    handleErrorRequest(err: string) {
      this.loading = false
      this.isSuccess = false
      this.message = err
      this.showToast()
    },
    async register(attendeeFullName: string, attendeeEmail: string) {
      this.loading = true
      try {
        const res = await classApi.registerClass({ classId: this.detailClasses.id, attendeeFullName, attendeeEmail })
        this.handleSuccessRequest(res.data.message)
      }
      catch (err: any) {
        this.handleErrorRequest(err.message)
        console.error(err)
        throw err
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useClassStore, import.meta.hot))
