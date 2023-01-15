#[tokio::main]
async fn main() -> Result<(), ()> {
    loop {
        println!("Listening...");
        std::thread::sleep(std::time::Duration::from_secs(1));
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(1, 1);
    }
}
