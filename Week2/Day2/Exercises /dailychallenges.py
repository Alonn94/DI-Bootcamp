class Pagination:
    def __init__(self,items=None,pageSize=10):
        self.items=items
        self.pageSize=pageSize
        self.currentPage =1
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)

    def getVisibleItems(self):
        start = (self.currentPage -1) *self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def prevPage(self):
        if self.currentPage>1:
            self.currentPage -= 1
        return self
    
    def nextPage(self):
        if self.currentPage<self.totalPages:
            self.currentPage += 1
        return self
    
    def firstPage(self):
        self.currentPage=1
        return self
    
    def lastPage(self):
        self.currentPage=self.totalPages
        return self
    
    def goToPage (self,pageNum):
        if pageNum < 1 :
            self.currentPage =1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else: 
            self.currentPage =pageNum
        return self
    



