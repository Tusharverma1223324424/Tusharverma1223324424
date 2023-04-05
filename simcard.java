import java.util.*;
class simcard{
    public static void main(String args[]){
    int esum=0;//even ke liye
    int osum=0;
    //odd ke liye
    System.out.println("enter a mobile number");
    Scanner sc=new Scanner(System.in);
    long mobile_num=sc.nextLong();
    
        while(mobile_num>0){
            int d=(int)(mobile_num%10);
            if(d%2==0){
                esum+=d;
            }
            else{
                osum+=d;
            }
            mobile_num/=10;
        }
    
    if(esum==osum){
        System.out.println("yes");
    }
    else{
        System.out.println("no");
    }

    }
}
