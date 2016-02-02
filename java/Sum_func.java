class Sum_func {
  public static void main(String[] args) {

    //make it biiger by 10
    int []numbers = new int[]{4, 5, 6, 7, 8, 9, 10};


   System.out.println (summa(numbers));


  }

  public static int summa(int[] num_list) {
    int s = 0;
    for(int i = 0; i<num_list.length; i++) {
      s += num_list[i];
    }
    return s;
  }
}
// set PATH="%PATH%;C:\Program Files\Java\jdk1.8.0_71\bin"
