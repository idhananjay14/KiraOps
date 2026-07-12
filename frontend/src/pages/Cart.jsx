import {
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";

import useCart from "../context/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Box
            sx={{
                py: 8,
                bgcolor: "#FAF9F6",
                minHeight: "80vh",
            }}
        >
            <Container maxWidth="md">
                <Typography
                    sx={{
                        fontFamily: "Cormorant Garamond",
                        fontSize: 52,
                        mb: 5,
                    }}
                >
                    Shopping Bag
                </Typography>

                {cartItems.length === 0 ? (
                    <Typography>Your cart is empty.</Typography>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    py: 3,
                                    borderBottom: "1px solid #ECE8E2",
                                }}
                            >
                                <Typography fontWeight={600}>
                                    {item.name}
                                </Typography>

                                <Typography sx={{ mt: 1 }}>
                                    ${item.price}
                                </Typography>

                                <Typography sx={{ mt: 1 }}>
                                    Quantity: {item.quantity}
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        mt: 2,
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >
                                        -
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </Button>

                                    <Button
                                        color="error"
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                    >
                                        Remove
                                    </Button>
                                </Box>
                            </Box>
                        ))}

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mt: 5,
                            }}
                        >
                            <Typography fontWeight={700}>
                                Total
                            </Typography>

                            <Typography fontWeight={700}>
                                ${total}
                            </Typography>
                        </Box>

                        <Button
                            component={Link}
                            to="/checkout"
                            variant="contained"
                            sx={{
                                mt: 4,
                                bgcolor: "#111",
                                borderRadius: 0,

                                "&:hover": {
                                    bgcolor: "#222",
                                },
                            }}
                        >
                            Checkout
                        </Button>
                    </>
                )}
            </Container>
        </Box>
    );
}