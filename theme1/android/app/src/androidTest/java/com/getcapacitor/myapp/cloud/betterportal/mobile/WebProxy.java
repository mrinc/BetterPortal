@Override
protected void onCreate(Bundle savd){
     super.onCreate(savd);
     ...
    //call contructor with local ip, port , public html directory path
    TinyWebServer.startServer("localhost",9000);
}

@Override
public void onDestroy(){
    super.onDestroy();
     //stop webserver on destroy of service or process
     TinyWebServer.stopServer();
}