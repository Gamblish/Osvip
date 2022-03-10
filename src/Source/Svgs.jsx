import React from 'react'

export function HomeSvg(props) {
    return (

        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path className={props.currentPage === props.to ? "MenuBar__Container__Links__Active" : null} d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#DADADA" />
        </svg>
    )
}
export function TransferSvg(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path className={props.currentPage == props.to ? "MenuBar__Container__Links__Active" : null} d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#DADADA" />
        </svg>
    )
}
export function TDirectionSvg(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.currentPage === props.to ? "MenuBar__Container__Links__Active" : null} fill-rule="evenodd" clip-rule="evenodd" d="M12.7098 2.29006L21.7098 11.2901C22.0998 11.6901 22.0998 12.3201 21.7098 12.7001L12.7098 21.7001C12.3198 22.0901 11.6898 22.0901 11.2998 21.7001L2.29982 12.7001C1.90982 12.3101 1.90982 11.6801 2.29982 11.2901L11.2998 2.29006C11.6898 1.90006 12.3198 1.90006 12.7098 2.29006ZM13.9998 12.0001V14.5001L17.4998 11.0001L13.9998 7.50006V10.0001H8.99982C8.44982 10.0001 7.99982 10.4501 7.99982 11.0001V15.0001H9.99982V12.0001H13.9998Z" fill="#B8BAC0" />
        </svg>
    )
}
export function TRansferSvg(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.currentPage === props.to ? "MenuBar__Container__Links__Active" : null} fill-rule="evenodd" clip-rule="evenodd" d="M14.99 10V13L11 9L14.99 5V8H22V10H14.99ZM2 14H9.01V11L13 15L9.01 19V16H2V14Z" fill="#B8BAC0" />
        </svg>
    )
}
export function DeclarationsSvg(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.currentPage === props.to ? "MenuBar__Container__Links__Active" : null} d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="#B8BAC0" />
        </svg>
    )
}
export function TestsSvg(props) {
   
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.currentPage === props.to ? "MenuBar__Container__Links__Active" : null} d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.41 2.75 12.75 3.09 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.09 11.59 2.75 12 2.75ZM9.1 17H7V14.86L12.96 8.9L15.08 11.02L9.1 17ZM16.85 9.27L15.79 10.33L13.67 8.21L14.73 7.15C14.93 6.95 15.24 6.95 15.44 7.15L16.85 8.56C17.05 8.76 17.05 9.07 16.85 9.27Z" fill="#B8BAC0" />
        </svg>
    )
}
export function ContactsSvg(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.currentPage === props.to ? "MenuBar__Container__Links__Active" : null} fill-rule="evenodd" clip-rule="evenodd" d="M20 0H4V2H20V0ZM20 24V22H4V24H20ZM4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM12 6.75C13.24 6.75 14.25 7.76 14.25 9C14.25 10.24 13.24 11.25 12 11.25C10.76 11.25 9.75 10.24 9.75 9C9.75 7.76 10.76 6.75 12 6.75ZM7 15.5V17H17V15.5C17 13.83 13.67 13 12 13C10.33 13 7 13.83 7 15.5Z" fill="#B8BAC0" />
        </svg>
    )
}