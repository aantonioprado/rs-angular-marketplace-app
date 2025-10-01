export interface INewProductRespose {
    message: string;
    data: {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      status: string;
      imageBase64: string;  
    }[];
}