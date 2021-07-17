package main

import "fmt"

// SMS and Email

type INotificationFactory interface {
	SendNotification()  // 1
	GetSender() ISender // 2
}

type ISender interface {
	GetSenderMethod() string  // 3
	GetSenderChannel() string // 4
}

// Esta estructura hereda y debe de implementar los metodos de
// INotificationFactory usando Reciver functions
// Como GetSender es de tipo ISender, entonces tambien se deben de implemtar sus metodos
type SMSNotification struct {
}

// Esta es la estructura que herda de ISender
// Entonces debemos de implementar sus metodos
type SMSNotificationISender struct {
}

// 1
func (SMSNotification) SendNotification() {
	fmt.Println("Notification send using SMS")
}

// 2
func (SMSNotification) GetSender() ISender {
	return SMSNotificationISender{}
}

// 3
func (SMSNotificationISender) GetSenderMethod() string {
	return "SMS"
}

// 4
func (SMSNotificationISender) GetSenderChannel() string {
	return "Twilio"
}

type EmailNotification struct {
}

type EmailNotificationISender struct {
}

func (EmailNotification) SendNotification() {
	fmt.Println("Notification send using Email")
}

func (EmailNotification) GetSender() ISender {
	return EmailNotificationISender{}
}

func (EmailNotificationISender) GetSenderMethod() string {
	return "Email"
}

func (EmailNotificationISender) GetSenderChannel() string {
	return "AWS"
}

func getNotificationFactory(notificationType string) (INotificationFactory, error) {
	if notificationType == "SMS" {
		return &SMSNotification{}, nil
	} else if notificationType == "Email" {
		return &EmailNotification{}, nil
	} else {
		return nil, fmt.Errorf("No notification Type")
	}
}

// Metodo que va a servir para pasarle un INotificationFactory(Struct padre)
// y llamara a la implementacion del metodo correspondiente

func sendNotification(f INotificationFactory) {
	f.SendNotification()
}

func getSenderMethod(f INotificationFactory) {
	fmt.Println(f.GetSender().GetSenderMethod())
}

func getSenderChannel(f INotificationFactory) {
	fmt.Println(f.GetSender().GetSenderChannel())
}

func main() {
	// getNotificationFactory -> retorna un INotificationFactory basado en
	// lo que recibe
	smsFactory, _ := getNotificationFactory("SMS")
	emailFactory, _ := getNotificationFactory("Email")

	sendNotification(smsFactory)
	sendNotification(emailFactory)

	getSenderChannel(smsFactory)
	getSenderChannel(emailFactory)

}
